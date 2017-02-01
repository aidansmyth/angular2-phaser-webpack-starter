import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { APP_PROVIDERS } from './services';
import { ENV_PROVIDERS } from './environment';
import { PAGE_DECLARATIONS } from './pages';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { AppStateService, AppStateData } from './services/app-state';

import '../styles/styles.scss';

/**
 * Application wide providers.
 */
const PROVIDERS = [APP_PROVIDERS, ENV_PROVIDERS];

/**
 * HMR data store.
 */
type Store = {
  state: AppStateData,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * Main entry point into application bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    PAGE_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [PROVIDERS]
})
export class AppModule {
  /**
   * Instantiate application module instance.
   */
  constructor(public appRef: ApplicationRef, public appState: AppStateService) {}

  /**
   * HMR init handler.
   */
  public hmrOnInit(store: Store) {
    if (!store || !store.state) {
      return;
    }

    // Set state.
    this.appState.state = store.state;

    // Set input values.
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    // Update app.
    this.appRef.tick();

    delete store.state;
    delete store.restoreInputValues;
  }

  /**
   * HMR destroy handler.
   */
  public hmrOnDestroy(store: Store) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);

    // Save state.
    const state = this.appState.state;
    store.state = state;

    // Recreate root elements.
    store.disposeOldHosts = createNewHosts(cmpLocation);

    // Save input values.
    store.restoreInputValues = createInputTransfer();

    // Remove styles.
    removeNgStyles();
  }

  /**
   * HMR post-destroy handler.
   */
  public hmrAfterDestroy(store: Store) {
    // Display new elements.
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
