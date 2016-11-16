export default function validateSlugList({ max } = { max: 30 }) {
  return (key, newValue) => {
    let result = newValue.every((slug) => {
      return slug === '' || slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) !== null && slug.length <= max;
    });
    return result || `All elements should be slugs with no more than ${max} chars(Allowed: lower case a-z letters and numbers. Use dashes to separate words)`;
  };
}
