import React from 'react';

const ICONS = {
  'shield-check':     'M12 3l8 4v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V7z|M9 12l2 2 4-4',
  'file-certificate': 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z|M14 3v5h5|M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0|M12 16v3l-1.5-1L9 19v-3',
  'building-factory': 'M3 21V9l5-3v15|M8 21V3l13 6v12|M13 13h.01M13 17h.01M17 13h.01M17 17h.01',
  'clipboard-list':   'M6 4h12v17a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2V4z|M9 4V2h6v2|M9 11h6M9 15h6M9 8h2',
  'bell':             'M18 8a6 6 0 1 0 -12 0c0 7 -3 9 -3 9h18s-3 -2 -3 -9|M13.7 21a2 2 0 0 1 -3.4 0',
  'user-check':       'M9 8m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0|M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2|M16 11l2 2 4-4',
  'alert-triangle':   'M12 9v4M12 17h.01|M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71 -3L13.71 3.86a2 2 0 0 0 -3.42 0z',
  'chevron-right':    'M9 18l6 -6 -6 -6',
  'chevron-left':     'M15 18l-6 -6 6 -6',
  'chevron-down':     'M6 9l6 6 6 -6',
  'search':           'M11 11m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0|m21 21 -4.3 -4.3',
  'calendar':         'M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2z|M16 2v4M8 2v4M3 10h18',
  'circle-check':     'M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0|M9 12l2 2 4 -4',
  'lock':             'M14 9V5a3 3 0 0 0 -6 0v4|M5 11h14v10a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2z',
  'menu-2':           'M4 6h16M4 12h16M4 18h16',
  'globe':            'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0|M3.6 9h16.8M3.6 15h16.8|M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18',
  'logout':           'M9 12h12l-3 -3M21 12l-3 3|M14 4H6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8',
  'arrow-right':      'M5 12h14M13 18l6 -6 -6 -6',
  'arrow-left':       'M19 12H5M11 18l-6 -6 6 -6',
  'check':            'M5 12l5 5L20 7',
  'x':                'M6 6l12 12M18 6l-12 12',
  'info-circle':      'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0|M12 8h.01M11 12h1v4h1',
  'mail':             'M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2z|m3 7 9 6 9 -6',
  'phone':            'M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2A16 16 0 0 1 3 6a2 2 0 0 1 2 -2',
  'map-pin':          'M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0|M17.657 16.657L13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z',
} as const;

export type IconName = keyof typeof ICONS;

export interface IconProps {
  name: IconName;
  size?: number;
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Mirror horizontally — for directional icons in RTL */
  flip?: boolean;
  'aria-label'?: string;
}

export function Icon({ name, size = 24, stroke = 1.5, className, style, flip, 'aria-label': ariaLabel }: IconProps) {
  const path = ICONS[name];
  const segments = path.split('|');
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{
        stroke: 'currentColor',
        fill: 'none',
        strokeWidth: stroke,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        flexShrink: 0,
        transform: flip ? 'scaleX(-1)' : undefined,
        ...style,
      }}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      {segments.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
