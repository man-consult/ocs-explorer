interface IconProps {
  size?: number
  className?: string
}

function SvgIcon({
  d,
  size = 16,
  className = '',
}: IconProps & { d: string | string[] }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {Array.isArray(d) ? (
        d.map((path, i) => <path key={i} d={path} />)
      ) : (
        <path d={d} />
      )}
    </svg>
  )
}

export const SearchIcon = (p: IconProps) => (
  <SvgIcon {...p} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
)

export const FolderIcon = (p: IconProps) => (
  <SvgIcon
    {...p}
    d={[
      'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
    ]}
  />
)

export const WandIcon = (p: IconProps) => (
  <SvgIcon
    {...p}
    d={[
      'M15 4V2',
      'M15 16v-2',
      'M8 9h2',
      'M20 9h2',
      'M17.8 11.8 19 13',
      'M15 9h.01',
      'M17.8 6.2 19 5',
      'M3 21l9-9',
      'M12.2 6.2 11 5',
    ]}
  />
)

export const BookIcon = (p: IconProps) => (
  <SvgIcon
    {...p}
    d={[
      'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
      'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
    ]}
  />
)

export const ChevronRight = (p: IconProps) => (
  <SvgIcon {...p} d="M9 18l6-6-6-6" />
)

export const ChevronDown = (p: IconProps) => (
  <SvgIcon {...p} d="M6 9l6 6 6-6" />
)

export const CloseIcon = (p: IconProps) => (
  <SvgIcon {...p} d="M18 6L6 18M6 6l12 12" />
)

export const ArrowRight = (p: IconProps) => (
  <SvgIcon {...p} d={['M5 12h14', 'M12 5l7 7-7 7']} />
)

export const CheckIcon = (p: IconProps) => (
  <SvgIcon {...p} d="M20 6L9 17l-5-5" />
)

export const LayersIcon = (p: IconProps) => (
  <SvgIcon
    {...p}
    d={['M12 2L2 7l10 5 10-5-10-5', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']}
  />
)

export const DownloadIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3']} />
)

export const ExternalLinkIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14L21 3']} />
)

export const ArrowLeftIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M19 12H5', 'M12 19l-7-7 7-7']} />
)

export const RefreshIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M1 4v6h6', 'M23 20v-6h-6', 'M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15']} />
)

export const MenuIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M3 12h18', 'M3 6h18', 'M3 18h18']} />
)

export const HomeIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10']} />
)

export const MailIcon = (p: IconProps) => (
  <SvgIcon {...p} d={['M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6l-10 7L2 6']} />
)
