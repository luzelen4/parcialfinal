PGDMP  /                
    {            tvs    16.1    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576    tvs    DATABASE     y   CREATE DATABASE tvs WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE tvs;
                postgres    false            �            1259    24578    tvs    TABLE     �   CREATE TABLE public.tvs (
    id integer NOT NULL,
    marca character varying(255) NOT NULL,
    referencia character varying(255) NOT NULL,
    modelo integer NOT NULL,
    pulgadas integer NOT NULL,
    color character varying(255) NOT NULL
);
    DROP TABLE public.tvs;
       public         heap    postgres    false            �            1259    24577 
   tvs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tvs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.tvs_id_seq;
       public          postgres    false    216            �           0    0 
   tvs_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.tvs_id_seq OWNED BY public.tvs.id;
          public          postgres    false    215                       2604    24581    tvs id    DEFAULT     `   ALTER TABLE ONLY public.tvs ALTER COLUMN id SET DEFAULT nextval('public.tvs_id_seq'::regclass);
 5   ALTER TABLE public.tvs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    24578    tvs 
   TABLE DATA           M   COPY public.tvs (id, marca, referencia, modelo, pulgadas, color) FROM stdin;
    public          postgres    false    216   �
       �           0    0 
   tvs_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.tvs_id_seq', 1, false);
          public          postgres    false    215                       2606    24585    tvs tvs_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.tvs
    ADD CONSTRAINT tvs_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.tvs DROP CONSTRAINT tvs_pkey;
       public            postgres    false    216            �   l   x�5�A
�0���Sx�J����i�@:��Z��9$׏7�y��
^C�	a3��ͨ߹���v�!�8��k�p�	�[����1��;G<G��u3�^��`     