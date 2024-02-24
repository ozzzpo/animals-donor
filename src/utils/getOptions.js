export default function (optionsArray) {
  if (optionsArray.length === 0) return;
  const options = [];
  optionsArray.map((option) => {
    const newOption = {
      value: option.id,
      label: option.name,
    };
    options.push(newOption);
  });
  return options;
}
