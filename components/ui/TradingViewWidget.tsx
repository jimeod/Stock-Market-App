"use client";

import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptURL,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}

      <div
        className={cn(`tradingview-widget-container, ${className ?? ""}`)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{
            height,
            width: "100%",
          }}
        />

        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">{title ?? "TradingView Chart"}</span>
          </a>

          <span className="trademark"> by TradingView</span>
        </div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
