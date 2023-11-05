"use client";
import toast from "react-hot-toast";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}; // ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive

const randomDelay = async () => {
  const MIN_DELAY_MS = 300;
  const MAX_DELAY_MS = 1000;
  const delayMs = getRandomInt(MIN_DELAY_MS, MAX_DELAY_MS);
  await sleep(delayMs);
};

const checkSuccessCondition = () => (getRandomInt(1, 10) > 2 ? true : false);

export const tryAction = async (action: () => void) => {
  await randomDelay();
  if (checkSuccessCondition()) {
    action();
    toast.success("리소스가 등록되었습니다.");
  } else {
    toast.error(`리소스 등록에 실패했습니다.\n다시 시도해주세요.`);
  }
};
