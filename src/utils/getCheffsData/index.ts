function getCheffsData() {
  // TODO: integrar com o backend
  const getCheffs = () => {
    return [
      {
        id: 1,
        name: "Cheff 1",
        foodType: "Italiana",
      },
      {
        id: 2,
        name: "Cheff 2",
        foodType: "Brasileira",
      },
      {
        id: 3,
        name: "Cheff 3",
        foodType: "Japonesa",
      },
    ];
  };

  try {
    return getCheffs();
  } catch (error) {
    return [];
  }
}

export { getCheffsData };
