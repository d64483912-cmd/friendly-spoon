"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useUserPreferences } from "@/lib/user-preference-store/provider"
import { Stethoscope, GraduationCap } from "@phosphor-icons/react"

export function ResponseModeSettings() {
  const { preferences, setResponseMode } = useUserPreferences()
  const isClinicalMode = preferences.responseMode === "clinical"

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Response Mode</h3>
        <p className="text-muted-foreground text-sm">
          Choose how NelsonGPT responds to your queries
        </p>
      </div>

      <div className="space-y-4">
        {/* Clinical Mode Option */}
        <div
          className={`border-border hover:bg-accent/50 flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors ${
            isClinicalMode ? "bg-accent border-primary" : ""
          }`}
          onClick={() => setResponseMode("clinical")}
        >
          <div className="mt-1">
            <Stethoscope
              className={`size-6 ${isClinicalMode ? "text-primary" : "text-muted-foreground"}`}
              weight={isClinicalMode ? "fill" : "regular"}
            />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="clinical-mode"
                className="cursor-pointer text-base font-medium"
              >
                Clinical Mode
              </Label>
              <Switch
                id="clinical-mode"
                checked={isClinicalMode}
                onCheckedChange={(checked) =>
                  setResponseMode(checked ? "clinical" : "academic")
                }
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong>Quick bedside support.</strong> Concise, action-oriented
              responses (2-3 sentences). Perfect for busy clinical rounds when
              you need fast answers.
            </p>
            <div className="text-muted-foreground mt-2 space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Lead with most likely diagnosis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Highlight red flags</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Focus on immediate next steps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Mode Option */}
        <div
          className={`border-border hover:bg-accent/50 flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors ${
            !isClinicalMode ? "bg-accent border-primary" : ""
          }`}
          onClick={() => setResponseMode("academic")}
        >
          <div className="mt-1">
            <GraduationCap
              className={`size-6 ${!isClinicalMode ? "text-primary" : "text-muted-foreground"}`}
              weight={!isClinicalMode ? "fill" : "regular"}
            />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="academic-mode"
                className="cursor-pointer text-base font-medium"
              >
                Academic Mode
              </Label>
              <Switch
                id="academic-mode"
                checked={!isClinicalMode}
                onCheckedChange={(checked) =>
                  setResponseMode(checked ? "academic" : "clinical")
                }
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong>In-depth learning.</strong> Comprehensive, educational
              responses with pathophysiology, evidence, and Nelson references.
              Ideal for studying and teaching.
            </p>
            <div className="text-muted-foreground mt-2 space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Detailed pathophysiology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Nelson Textbook citations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Evidence-based explanations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-muted-foreground text-xs leading-relaxed">
          <strong>Tip:</strong> Switch modes based on your context. Use Clinical
          Mode during rounds for quick answers, then switch to Academic Mode
          later for deeper learning about interesting cases.
        </p>
      </div>
    </div>
  )
}
