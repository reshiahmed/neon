import { Type, Zap, Square, PanelTop, Milestone, Car, AppWindow, Printer, HelpCircle } from 'lucide-react'

const map = { Type, Zap, Square, PanelTop, Milestone, Car, AppWindow, Printer }

export const serviceIcon = (name) => map[name] || HelpCircle
