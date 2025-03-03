import { QRCodeSVG } from "qrcode.react"
import { Cross } from "lucide-react"

export function PrintVersion() {
  return (
    <div className="print-only">
      <div className="card-wrapper">
        {/* Front Side */}
        <div className="card-front">
          {/* Gold Accent Line */}
          <div className="card-accent" />

          {/* Cross Watermark */}
          <div className="card-watermark">
            <Cross />
          </div>

          {/* Content */}
          <div className="card-content">
            <div className="card-header">
              <h2 className="card-subtitle">BLOOD OF JESUS CHURCH</h2>
              <h1 className="card-name">
                Pastor Enoch
                <br />
                Olajide J.
              </h1>
            </div>

            <div className="card-contact">
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                909-600-1561
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                Bloodofjesusprayer@gmail.com
              </p>
              <p className="contact-item">
                <span className="contact-icon">🌐</span>
                bloodofjesuschurch.org
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                1354 North Mountain View Avenue
                <br />
                San Bernardino, CA 92405
              </p>
            </div>

            <div className="card-qr">
              <QRCodeSVG
                value="https://bloodofjesuschurch.org"
                size={80}
                bgColor={"#ffffff"}
                fgColor={"#91712a"}
                level={"L"}
                includeMargin={false}
              />
            </div>
          </div>
        </div>

        {/* Back Side (prints on new page) */}
        <div className="card-back">
          <div className="card-content">
            <Cross className="card-cross" />
            <blockquote className="card-quote">
              "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but
              have eternal life."
            </blockquote>
            <cite className="card-cite">John 3:16</cite>
          </div>
        </div>
      </div>
    </div>
  )
}
