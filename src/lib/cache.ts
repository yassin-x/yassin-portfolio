/* eslint-disable @typescript-eslint/no-explicit-any */
import { cache as reactCache } from "react";
import { unstable_cache as nextCache } from "next/cache";

type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
  callback: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reactCache(callback), keyParts, options);
}