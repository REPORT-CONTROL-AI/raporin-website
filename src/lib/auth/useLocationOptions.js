"use client";
import { useEffect, useState } from "react";
import { getJson } from "./api";

/** Seçili üst öğeye ait liste; üst öğe değişince eski liste gösterilmez. */
function useChildOptions(parentId, pathFor, onError) {
  const [state, setState] = useState({ parentId: null, items: [] });

  useEffect(() => {
    if (!parentId) return;
    let cancelled = false;
    getJson(pathFor(parentId))
      .then((items) => !cancelled && setState({ parentId, items }))
      .catch(() => !cancelled && onError());
    return () => {
      cancelled = true;
    };
    // pathFor ve onError sabit fonksiyonlar; yalnızca üst öğe değişiminde yeniden yüklenir.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId]);

  return parentId && String(state.parentId) === String(parentId) ? state.items : [];
}

/** İl → ilçe → mahalle seçim listeleri (kayıt ve eczane bilgileri formları). */
export function useLocationOptions(cityId, districtId) {
  const [cities, setCities] = useState([]);
  const [loadError, setLoadError] = useState(false);
  const onError = () => setLoadError(true);

  useEffect(() => {
    getJson("/api/location/cities").then(setCities).catch(onError);
  }, []);

  const districts = useChildOptions(cityId, (id) => `/api/location/cities/${id}/districts`, onError);
  const neighborhoods = useChildOptions(districtId, (id) => `/api/location/districts/${id}/neighborhoods`, onError);

  return { cities, districts, neighborhoods, loadError };
}
