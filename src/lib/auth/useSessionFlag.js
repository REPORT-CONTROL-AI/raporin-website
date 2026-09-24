"use client";
import { useSyncExternalStore } from "react";
import { hasSessionFlag } from "./sessionFlag";

const subscribe = () => () => {};

/**
 * Oturum işaret çerezini okur. Çerez için bir değişiklik olayı yok; değer her render'da
 * yeniden okunur (giriş/çıkış sayfa geçişiyle olduğundan bu yeterli). Sunucuda false döner.
 */
export function useSessionFlag() {
  return useSyncExternalStore(subscribe, hasSessionFlag, () => false);
}
