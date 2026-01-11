const DecorativeElements = ({ variant = "default" }) => {
  const renderDots = (position, count = 15) => {
    return (
      <div className={`dots dots-${position}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>
    )
  }

  if (variant === "home") {
    return (
      <>
        {renderDots("top-left", 15)}
        {renderDots("bottom-right", 15)}
        <div className="curve-shape curve-1"></div>
        <div className="curve-shape curve-2"></div>
      </>
    )
  }

  if (variant === "form") {
    return (
      <>
        {renderDots("top-right", 20)}
        {renderDots("bottom-right", 20)}
        <div className="curve-shape curve-1"></div>
        <div className="curve-shape curve-2"></div>
      </>
    )
  }

  return null
}

export default DecorativeElements
