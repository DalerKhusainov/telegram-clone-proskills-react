/////////////////////////////////////////////////////////////
///// THIS FUNCTION TAKES THE FIRST LETTER FROM EACH STRING AS INITIAL
///// IT IS BEING USED IN MenuSection.jsx (1 Place)
export const setInitialName = (str) => {
  const arr = str.split(" ");
  const firstName = arr[0];
  const lastName = arr[1];
  return firstName[0] + lastName[0];
};

/////////////////////////////////////////////////////////////
///// THIS FUNCTION TAKES THE FIRST WORD FROM A STRING
///// IT IS BEING USED IN AppArea.jsx (1 Place)
export const setFirstName = (str) => {
  const arr = str.split(" ");
  return arr[0];
};
