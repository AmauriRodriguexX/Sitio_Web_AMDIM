<!-- modelos/+page.svelte -->
<script lang="ts">
  import ModelCard from '$lib/components/molecules/ModelCard.svelte';

  let activeFilter = $state('all');

  const categories = [
    { id: 'all', label: 'Todos los vehículos' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'autos', label: 'Autos' },
    { id: 'camionetas', label: 'Camionetas' },
    { id: 'hibrido', label: 'Híbrido/Enchufable' },
    { id: 'crossover', label: 'Crossover' }
  ];

  const MODEL_360_SEQUENCES = {
    "mirage": [
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-1_706_VoEqGl8cOO.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-6_702_RK9w4jsTAp.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-5_700_J8ipFiPbtF.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-4_704_FUhmdvDM1c.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-3_708_fXqQdHgqJH.avif",
        "https://mitsubishi-motors.mx/assets/mirage-g4-cool-silver-metallic-2_710_WiODj5XHV2.avif"
    ],
    "xpander": [
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-1_5025_kFcWmaAk5b.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-2_5026_1t9f1V1xef.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-3_5027_zTaRlq3mbI.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-4_5028_shUfjwy82v.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-5_5029_y7XPrOqf8g.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-6_5030_HKCzHgOo9b.avif",
        "https://mitsubishi-motors.mx/assets/xpander-red-metallic-7_5031_vw6Y9WsJNg.avif"
    ],
    "xpander-cross": [
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-1_4912_9JWCJxexYY.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-2_5073_3w0FKXmmOi.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-3_5074_uvg5ZMBicj.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-4_5075_JD57Q53Jtz.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-5_5076_Rt7gw5gBG2.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-6_5077_BYgkZze4Sm.avif",
        "https://mitsubishi-motors.mx/assets/cross-sunrise-orange-metallic-7_5078_5ahI17ROa3.avif"
    ],
    "outlander-sport": [
        "/assets/images/vehicles/Outlander-Sport-energetic-yellow-metallic-1_3664_Q4BHtIY6RY.png",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-energetic-yellow-metallic-5_3662_K3OQY39O1t.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-energetic-yellow-metallic-4_3666_lQDWp1gOut.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-energetic-yellow-metallic-3_2673_HZsumDpqRZ.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Sport-energetic-yellow-metallic-2_2674_rZVYRT1ecu.avif"
    ],
    "outlander": [
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-1_3082_tsw2wTDutt.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-2_3033_YhFLLtG4Oo.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-3_3111_ARIs0VaZtZ.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-4_3112_yMm7LQUpoN.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-5_3366_z491wQEEcH.avif",
        "https://mitsubishi-motors.mx/assets/Outlander-Moonstone-Gray-6_3371_6i56poa1Mk.avif"
    ],
    "outlander-phev": [
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-1_4955_IU5J4zFuKW.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-5_4959_640067fCAb.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-4_4958_U4K7W6geNv.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-3_4957_ysxA0xhDYw.avif",
        "https://mitsubishi-motors.mx/assets/phev-white-diamond-2_4956_3e2IGDuhUI.avif"
    ],
    "montero": [
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-1_3780_R8tzr6hySx.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-5_3808_uvm8Sb88Am.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-4_3783_AaN4Jm37RS.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-3_3806_6cSV9RtpqD.avif",
        "https://mitsubishi-motors.mx/assets/montero-blade-silver-metallic-2_3805_PuTg4P28ge.avif"
    ],
    "l200": [
        "/assets/images/vehicles/l200-impulse-blue-metallic-1_4262_R1Lm6cdVyB.png",
        "https://mitsubishi-motors.mx/assets/l200-impulse-blue-metallic-5_4266_e2tKFDOWr8.avif",
        "https://mitsubishi-motors.mx/assets/l200-impulse-blue-metallic-4_4265_aRNSM6cpsP.avif",
        "https://mitsubishi-motors.mx/assets/l200-impulse-blue-metallic-3_4264_rP5JJD1wZE.avif",
        "https://mitsubishi-motors.mx/assets/l200-impulse-blue-metallic-2_4263_SG0ZGOEomI.avif"
    ],
    "l200-gsr": [
        "/assets/images/vehicles/GSR-orange-metallic-1_3919_ghhNVLxsm7.png",
        "https://mitsubishi-motors.mx/assets/GSR-orange-metallic-5_3928_Cd68tvSkqz.avif",
        "https://mitsubishi-motors.mx/assets/GSR-orange-metallic-4_3924_VQV3aJTBji.avif",
        "https://mitsubishi-motors.mx/assets/GSR-orange-metallic-3_3921_cSnMpRyDoc.avif",
        "https://mitsubishi-motors.mx/assets/GSR-orange-metallic-2_3920_02lBRRjcWQ.avif"
    ]
  };

  const models = [
    {
      id: 'mirage',
      name: 'Mirage G4',
      price: 'Desde $322,900 MXN',
      badge: 'Sedán',
      category: 'autos',
      description: 'El sedán eficiente con un excelente rendimiento de combustible, gran espacio interior y conectividad moderna para tu día a día.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-MirageG4-2026_3168_0nBiWODi6u.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/MIG426/catalogo/MIG426.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES.mirage
    },
    {
      id: 'xpander',
      name: 'Xpander',
      price: 'Desde $453,900 MXN',
      badge: 'MPV / Familiar',
      category: 'autos',
      description: 'La camioneta familiar con espacio inteligente y versátil de 3 filas para 7 pasajeros, ideal para compartir grandes momentos.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-tecnica-Mitsubishi-Xpander-2026_3742_wNjkX9RH4s.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/XPAN26/catalogo/XPAN26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES.xpander
    },
    {
      id: 'xpander-cross',
      name: 'Xpander Cross',
      price: 'Desde $475,900 MXN',
      badge: 'Crossover',
      category: 'crossover',
      description: 'La versión crossover con diseño robusto, mayor altura al suelo y la comodidad ideal para tus aventuras familiares.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-XpanderCross-2026_3671_J82JLvBzHe.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/XPANC26/catalogo/XPANC26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES['xpander-cross']
    },
    {
      id: 'outlander-sport',
      name: 'Outlander Sport',
      price: 'Desde $467,900 MXN',
      badge: 'SUV Compacto',
      category: 'camionetas',
      description: 'Un SUV dinámico, audaz y compacto, diseñado para destacar en la ciudad con tecnología avanzada y agilidad excepcional.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-Outlander-Sport-2026_2700_J8AQjmUAuA.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/OUTS26/catalogo/OUTS26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES['outlander-sport']
    },
    {
      id: 'outlander',
      name: 'Outlander',
      price: 'Desde $609,900 MXN',
      badge: 'SUV Mediano',
      category: 'camionetas',
      description: 'Elegancia premium, confort de tres filas de asientos, seguridad de vanguardia y un manejo dinámico incomparable para toda la familia.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-Outlander-2026_3375_sBIEZGDcrF.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/OUTL26/catalogo/OUTL26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES.outlander
    },
    {
      id: 'outlander-phev',
      name: 'Outlander PHEV',
      price: 'Desde $883,900 MXN',
      badge: 'Híbrido Enchufable',
      category: 'hibrido',
      description: 'El SUV híbrido enchufable más vendido del mundo, combinando el poder eléctrico con tracción S-AWC de alto rendimiento.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-OutlanderPHEV-2026_4006_PmhJB2Zab4.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/OTPV26/catalogo/OTPV26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES['outlander-phev']
    },
    {
      id: 'montero',
      name: 'Montero Sport',
      price: 'Desde $980,900 MXN',
      badge: 'SUV Off-Road',
      category: 'camionetas',
      description: 'Fuerza legendaria todoterreno combinada con lujo, confort de primer nivel, tecnología off-road y una presencia imponente.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-MonteroSport-2025_2807_6nTUKImw2g.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2025/MONT25/catalogo/MONT25.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES.montero
    },
    {
      id: 'l200',
      name: 'L200',
      price: 'Desde $582,900 MXN',
      badge: 'Pick-up',
      category: 'comercial',
      description: 'La pick-up legendaria construida con un chasis ultra resistente, motor turbo diésel eficiente y tracción 4WD para el trabajo y la aventura.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-L200-2026-UT-011125_3624_bKj1RpMaqQ.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/L20026/catalogo/L20026.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES.l200
    },
    {
      id: 'l200-gsr',
      name: 'L200 GSR',
      price: 'Desde $870,900 MXN',
      badge: 'Pick-up Premium',
      category: 'comercial',
      description: 'La máxima expresión de rudeza y sofisticación. Diseño oscurecido exclusivo GSR, confort premium y capacidades off-road incomparables.',
      techDocUrl: 'https://mitsubishi-motors.mx/assets/Ficha-Tecnica-Mitsubishi-L200GSR-2026_2951_O0CkyCIGOh.pdf',
      catalogUrl: 'https://buckmitsu.s3.us-west-2.amazonaws.com/autos/modelos/2026/L200G26/catalogo/L200G26.pdf',
      financeUrl: 'https://mitsubishi-motors.mx/comprar/financiamiento/cotizador',
      sequence: MODEL_360_SEQUENCES['l200-gsr']
    }
  ];

  let filteredModels = $derived(
    activeFilter === 'all' 
      ? models 
      : models.filter(m => m.category === activeFilter)
  );
</script>

<section id="modelos" class="content-section">
  <div class="section-header">
    <h2>Modelos Mitsubishi</h2>
    <p>Descubre la gama actual de vehículos y descarga sus fichas técnicas.</p>
  </div>

  <!-- Filtro de Modelos -->
  <div class="models-filter-wrapper">
    <div class="models-filter-container">
      {#each categories as category}
        <button 
          class="filter-btn" 
          class:active={activeFilter === category.id} 
          onclick={() => activeFilter = category.id}
        >
          {category.label}
        </button>
      {/each}
    </div>
  </div>

  <!-- Listado de Modelos con imágenes y fichas técnicas -->
  <div id="models-container" class="models-grid">
    {#each filteredModels as model (model.id)}
      <div class="model-animate-wrapper">
        <ModelCard {...model} />
      </div>
    {/each}
  </div>
</section>

