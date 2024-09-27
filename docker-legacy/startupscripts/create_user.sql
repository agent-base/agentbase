show pdbs;
ALTER SYSTEM SET PROCESSES=500 SCOPE=SPFILE; 
alter session set container= freepdb1;
create user agentbase identified by agentbase DEFAULT TABLESPACE users quota unlimited on users;
grant DB_DEVELOPER_ROLE to agentbase;
