app:
	docker build -t backend:latest .

run:
	docker run -p 3000:3000 -t backend:latest
	
