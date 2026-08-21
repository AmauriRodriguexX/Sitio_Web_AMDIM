export class GlobalState {
  toastMessage = $state<string | null>(null);
  activeLegalType = $state<'privacidad' | 'legal' | 'cookies' | 'terminos' | null>(null);
  mobileMenuOpen = $state(false);

  showToast(msg: string) {
    this.toastMessage = msg;
    setTimeout(() => {
      if (this.toastMessage === msg) {
        this.toastMessage = null;
      }
    }, 4000);
  }

  closeToast() {
    this.toastMessage = null;
  }

  openLegal(type: 'privacidad' | 'legal' | 'cookies' | 'terminos') {
    this.activeLegalType = type;
  }

  closeLegal() {
    this.activeLegalType = null;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

export const globalState = new GlobalState();
