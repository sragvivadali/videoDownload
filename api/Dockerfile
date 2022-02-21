FROM python:3.9-alpine

WORKDIR /api
ADD . /api/

RUN pip install -r requirements.txt

ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_APP=app.py

CMD ["flask", "run"]
