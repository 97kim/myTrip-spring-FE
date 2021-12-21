# myTrip-FE
여행어때 프로젝트 백엔드 프론트엔드 분리

## FE
- AWS S3에 올려 AWS Cloudfront와 연결
- CORS는 백엔드 스프링 시큐리티에서 처리

<hr>

AWS Route 53에서 서브 도메인 추가 <br>
api.mytrips.shop -> ec2 인스턴스 (BE) <br>
www.mytrips.shop -> Cloudfront 배포 도메인 (FE)
