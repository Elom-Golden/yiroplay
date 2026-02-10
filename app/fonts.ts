import { Epilogue, Alexandria } from "next/font/google";

export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-epilogue",
  display: "swap",
});

export const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-alexandria",
  display: "swap",
});
