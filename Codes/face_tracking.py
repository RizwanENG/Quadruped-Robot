import cv2
import numpy as np
from picamera2 import Picamera2
from adafruit_servokit import ServoKit
from gpiozero import LED
import time

kit = ServoKit(channels=16)
laser = LED(17)

base = 14
turret = 15

base_min, base_max = 30, 150
turret_min, turret_max = 40, 140

width = 640
height = 480
fps = 60

face_y_offset = 40

face_cascade = cv2.CascadeClassifier(
    "/usr/share/opencv4/haarcascades/haarcascade_frontalface_default.xml"
)

picam2 = Picamera2()

config = picam2.create_video_configuration(
    main={"size": (width, height), "format": "RGB888"},
    controls={
        "FrameRate": fps,
        "AeEnable": True,
        "AwbEnable": True
    },
    buffer_count=2
)

picam2.configure(config)
picam2.start()

time.sleep(1)

print("Direct Mapping Face Tracking Started")
print("Press Q to quit")

while True:

    frame = picam2.capture_array()

    gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)

    faces = face_cascade.detectMultiScale(
        gray,
        scaleFactor=1.15,
        minNeighbors=9,
        minSize=(100, 100)
    )

    if len(faces) > 0:

        laser.on()

        x, y, w, h = max(faces, key=lambda rect: rect[2] * rect[3])

        target_x = x + w // 2
        target_y = y + h // 2 + face_y_offset

        target_y = max(0, min(height, target_y))

        base_angle = np.interp(target_x, [0, width], [150, 30])
        turret_angle = np.interp(target_y, [0, height], [40, 140])

        base_angle = int(max(base_min, min(base_max, base_angle)))
        turret_angle = int(max(turret_min, min(turret_max, turret_angle)))

        kit.servo[base].angle = base_angle
        kit.servo[turret].angle = turret_angle

        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)

        cv2.circle(frame, (target_x, target_y), 6, (255, 0, 0), -1)

        cv2.putText(frame, "TARGET ACQUIRED", (20, 40),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        print(f"Base: {base_angle} | Turret: {turret_angle} | Laser: ON", end="\r")

    else:

        laser.off()

        cv2.putText(frame, "SEARCHING...", (20, 40),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    display = cv2.resize(frame, (720, 540))

    cv2.imshow("Direct Face Tracking Turret", display)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

laser.off()

picam2.stop()

cv2.destroyAllWindows()
