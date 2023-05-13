class LocalSettings {
  private readonly settings: any = {};

  private getSettings = () => JSON.parse(localStorage.getItem(this.name) || '{}');

  constructor(private name: string) {
    this.settings = this.getSettings();
  }

  public setValue(key: string | number | symbol, value: string | number | boolean) {
    this.settings[key] = value;
    this.sync();
  }

  public getValue(key: any) {
    return this.settings[key];
  }

  private sync() {
    localStorage.setItem(this.name, JSON.stringify(this.settings));
  }
}

export const localSettings = new LocalSettings('__tc');
