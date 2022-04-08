export const getFLAMES = (firstName:string,secondName:string) => {
  const firstNameArr = firstName.toLowerCase().split("");
  const secondNameArr = secondName.toLowerCase().split('');

  const firstNameChars = getCharMapFromName(firstNameArr);
  const secondNameChars = getCharMapFromName(secondNameArr);

  return getFLAMESComponent(getUnMatchCount(firstNameChars, secondNameChars),firstName,secondName);
}

const getFLAMESComponent = (count:number,firstName:string,secondName:string):string => {
  const FLAMES = ["F", "L", "A", "M", "E", "S"];
  let message="";
  switch (FLAMES[count % 6]) {
    case 'F':
      message = `<b>${firstName}</b>, You and <b>${secondName}</b> are meant to be <b>Friends</b>`;
      break;
    case 'L':
      message = `<b>${firstName}</b>, You and <b>${secondName}</b> have something beautiful, <b>Love ❤️</b>`;
      break;
    case 'A':
      message = `<b>${firstName}</b>, You and <b>${secondName}</b> have <b>Affection</b> 💕 towards Each Other`;
      break;
    case 'M':
      message = `<b>${firstName}</b>, Yours and <b>${secondName}'s</b> affair going to be End in a <b>Marriage</b>`;
      break;
    case 'E':
      message = `<b>${firstName}</b>, You and <b>${secondName}</b> seem to have problems with each other`;
      break;
    case 'S':
      message = `<b>${firstName}</b>, You and <b>${secondName}</b> have a <b>Sibling</b> kind of relationship`;
      break;
  }
  return message;
}


const getUnMatchCount = (firstNameChars:Map<string,number>,secondNameChars:Map<string,number>) => {
  let unMatchCount = 0;
  const longestCharMap =
    firstNameChars.size > secondNameChars.size
      ? firstNameChars
      : secondNameChars;
  const shortestCharMap =
    firstNameChars.size > secondNameChars.size
      ? secondNameChars
      : firstNameChars;

  let shortKeySet = Array.from(shortestCharMap.keys());


  for (let char of Array.from(longestCharMap.keys())) {
    if (shortestCharMap.has(char)) {
      unMatchCount += Math.abs((longestCharMap.get(char) - shortestCharMap.get(char)));
      shortKeySet = shortKeySet.filter((key) => key != char);
    } else {
      unMatchCount += longestCharMap.get(char);
    }
  }
  for (let char of shortKeySet) {
    unMatchCount += shortestCharMap.get(char);
  }
  return unMatchCount;
}

const getCharMapFromName = (name:string[]) => {
  const nameChars = new Map();
  for (let char of name) {
    if (nameChars.has(char)) {
      const val = nameChars.get(char);
      nameChars.set(char, val + 1);
    } else {
      nameChars.set(char,1)
    }
  }
  return nameChars;
}