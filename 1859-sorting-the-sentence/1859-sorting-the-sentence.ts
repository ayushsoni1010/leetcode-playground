function sortSentence(s: string): string {
  return s
    .split(' ')
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]))
    .map((w) => w.slice(0, -1))
    .join(' ');
}