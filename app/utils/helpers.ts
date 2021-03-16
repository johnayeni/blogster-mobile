export const convertTimestampToDateString = (timestamp: number) => {
  const milliseconds = timestamp * 1000;

  const dateObject = new Date(milliseconds);

  const dateString = dateObject.toDateString();

  return dateString;
};

export const sliceText = (text: string, length: number = 30) => {
  if (text.length > length) {
    return text.slice(0, length).concat('...');
  }

  return text;
};
