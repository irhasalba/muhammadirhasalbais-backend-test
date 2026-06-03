WITH last_education AS  (
 SELECT id_murid,m.name,m.time_create,status,rank() OVER (PARTITION BY p.id_murid  ORDER BY p.time_create DESC ) AS last_edu FROM pendidikan p JOIN murid m ON m.id = p.id_murid
)
SELECT id_murid,name,status AS pendidikan_terakhir,time_create FROM last_education WHERE last_edu = 1;