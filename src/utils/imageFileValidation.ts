const checkImgExts = (fileName: string) => {
  const isAllowedExt = /^.+[.](jpg|png)$/i.test(fileName);
  if (!isAllowedExt) throw fileName;
  return true;
};

const checkImgFile = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(imgUrl);
    };
    image.onerror = () => {
      URL.revokeObjectURL(imgUrl);
      reject(Error(`Invalid Image File (Name:"${file.name}")`));
    };
    const imgUrl = URL.createObjectURL(file);
    image.src = imgUrl;
  });
};

export const validateImgFile = async (file: File) => {
  checkImgExts(file.name);
  return await checkImgFile(file);
};
