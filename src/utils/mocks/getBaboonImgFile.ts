export const getBaboonImgFile = async () => {
  const baboonBlob = await (await fetch("/4.2.03.png")).blob();

  return new File([baboonBlob], "4.2.03.png", { type: baboonBlob.type });
};
