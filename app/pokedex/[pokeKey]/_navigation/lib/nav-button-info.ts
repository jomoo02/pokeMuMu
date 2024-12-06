export function setFormText(form: string) {
  if (form === '기본 모습') {
    return '';
  }

  return `(${form})`;
}
