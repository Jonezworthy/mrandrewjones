import { skill } from "./skills";

export interface Icon {
    label: string, iconSrc?: string, imgSrc?: string, doInvert?: Boolean, doBrightness?: Boolean, blurb: string, experience: string[], years: number, skill: skill
}