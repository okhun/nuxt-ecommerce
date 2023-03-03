export const getItem: any = (name: string) =>
  process.client ? localStorage?.getItem(name) : "";

export const removeItem: any = (name: string) =>
  process.client ? localStorage?.removeItem(name) : "";
export const setItem: any = (name: string, data: any) =>
  process.client ? localStorage?.setItem(name, data) : "";

export const createUUID = () => {
  const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
