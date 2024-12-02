function getJongseongIndex(char: string) {
  const charCode = char.charCodeAt(0);

  if (charCode >= 0xAC00 && charCode <= 0xD7A3) {
    const jongseong = (charCode - 0xAC00) % 28;
    return jongseong;
  }
  return -1;
}

export function getParticle(word: string) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '를' : '을';
  }

  return '';
}

export function getParticleForAnd(word: string) {
  const lastChar = word[word.length - 1];

  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '와' : '과';
  }

  return '';
}

export function getSubjectParticle(word: string) {
  const lastChar = word[word.length - 1];
  const jongseong = getJongseongIndex(lastChar);

  if (jongseong !== -1) {
    return jongseong === 0 ? '가' : '이';
  }

  return '';
}
