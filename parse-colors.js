const parseHTMLColor = color => {
    let hex = color.toLowerCase()
    let rgb = []
    for (let key in PRESET_COLORS)
      if (key === color.toLowerCase())
        hex = PRESET_COLORS[key]
    if (hex.length < 5) rgb.push(hex[1] + hex[1], hex[2] + hex[2], hex[3] + hex[3])
    else rgb.push(hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7))
    rgb = rgb.map(hex => parseInt(hex, 16))
    return { r: rgb[0], g: rgb[1], b: rgb[2] }
  }