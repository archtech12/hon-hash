export type TemplateId = 'classic' | 'modern' | 'youth' | 'print' | 'minimal' | 'badge' | 'type' | 'geometric' | 'classicV2' | 'badgeV2' | 'geometricV2' | 'classicPremium' | 'modernPremium' | 'printPremium' | 'badgePremium'
export type AspectRatio = 'square' | 'portrait' | 'landscape' | 'print'

export interface StickerData {
  supporterName: string
  supporterPhoto: string | null
  customMessage: string
  templateId: TemplateId
  aspectRatio: AspectRatio
  showWatermark: boolean
  colorTheme: 'green' | 'red' | 'blue' | 'gold'
}

export interface TemplateProps {
  data: StickerData
  isExporting?: boolean
}
