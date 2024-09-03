import { create } from "zustand";

type BannerState = {
  dismissed: boolean;
  dismiss: () => void;
};

const useBanner = create<BannerState>((set) => ({
  dismissed: false,
  dismiss: () => set({ dismissed: true }),
}));

export default useBanner;
