import Image from 'next/image'

interface CustomImageProps {
  src: string
  alt: string
  className?: string
}

export const CustomImage = ({ src, alt, className }: CustomImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform hover:scale-105"
        priority
      />
    </div>
  )
} 