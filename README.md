Proje Kurulum ve Adımları

1- minikube start

2- minikube addons enable ingress


3- minikube ip komutunu terminalde çalıştır. Çıktıyı /etc/hosts altına şu şekilde yapıştır.


  GNU nano 4.8                                                                                                                                       /etc/hosts                                                                                                                                                  
127.0.0.1       localhost
127.0.1.1       rumeysa-PC
192.168.49.2    frontend.app.com
192.168.49.2     backend.app.com


4- cd kubernetes klasörüne gir.
5- kubectl apply -f databases/mongo
6- kubectl apply -f frontend
7- kubectl apply -f backend


komutları ile ingress, deployment, servisler ayağa kaldırılır. Mongo stateful set olarak oluşturuldu.


ui ve apiye  ait imageler dockerhub'a pushlandı. İmageler oradan çekilerek basit bir login register uygulaması yapılmıştır.

cd monnitoring klasörü ile sistem izlenmesi yapılmaktadır.
kubectl rollout status -n efk statefulset es-cluster komutu ile cluster ve replikalar kontrol edilebilirç

kubectl get pods -n efk
komutu ile podlar görüntülenir.

elastik logların tutulacağı yeri ifade etmektedir. fluentd de logları toplayıp elastiğe gönderecek. daemon set olarak çalıştırılacak çünkü node üzerinde çalışacak