
type Mods = Record<string, boolean | string>;

export function classNames(mainClass: string, mode: Mods, additional: string[]): string {

  return [
    mainClass,
    ...additional,
    ...Object.entries(mode)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}

