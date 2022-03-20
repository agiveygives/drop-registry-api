const isInt = (value: any) => {
  if (isNaN(value)) {
    return false;
  }

  const int = parseInt(value);

  return (int | 0) === int;
};

export default isInt;
