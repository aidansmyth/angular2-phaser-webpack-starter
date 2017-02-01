import { Injectable } from '@angular/core';

/**
 * Application state data.
 */
export type AppStateData = {
  [key: string]: any
};

/**
 * Application state service.
 */
@Injectable()
export class AppStateService {
  /**
   * Application state data.
   */
  protected appStateData: AppStateData = { };

  /**
   * Get clone of appication state data.
   */
  public get state(): AppStateData {
    return this.clone(this.appStateData);
  }

  /**
   * Set application state data.
   */
  public set state(stateData: AppStateData) {
    this.appStateData = stateData;
  }

  /**
   * Get application state value for specified property.
   */
  public get(prop?: any) {
    // Cloned.
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : null;
  }

  /**
   * Set application state value for specified property.
   */
  public set(prop: string, value: any) {
    // Internally mutate our state.
    return this.appStateData[prop] = value;
  }

  /**
   * Clone application state data.
   */
  protected clone(object: AppStateData) {
    // Simple object clone.
    return JSON.parse(JSON.stringify(object));
  }
}
