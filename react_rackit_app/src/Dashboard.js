import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Card,
	Container,
	Row,
	Col,
	Jumbotron,
	CardDeck,
	Button,
	Carousel,
} from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";

export const Dashboard = () => {
	const [countUtilizadores, setCount] = useState(0);
	useEffect(() => {
		async function contarUtilizadores() {
			let response = await fetch("http://localhost:3000/utilizadores/count");
			response = await response.json();
			setCount(response.count);
		}
		contarUtilizadores();
	}, []);

	const [countListasProdutos, setCountListasProdutos] = useState(0);
	useEffect(() => {
		async function contarListasProdutos() {
			let response = await fetch("http://localhost:3000/lista-produtos/count");
			response = await response.json();
			setCountListasProdutos(response.count);
		}
		contarListasProdutos();
	}, []);

	const [countProdutos, setCountProdutos] = useState(0);
	useEffect(() => {
		async function contarProdutos() {
			let response = await fetch("http://localhost:3000/produtos/count");
			response = await response.json();
			setCountProdutos(response.count);
		}
		contarProdutos();
	}, []);

	const [countInformacoes, setCountInformacoes] = useState(0);
	useEffect(() => {
		async function contarInformacoes() {
			let response = await fetch("http://localhost:3000/info-produtos/count");
			response = await response.json();
			setCountInformacoes(response.count);
		}
		contarInformacoes();
	}, []);

	const [countArmazem, setCountArmazens] = useState(0);
	useEffect(() => {
		async function contarArmazens() {
			let response = await fetch("http://localhost:3000/armazems/count");
			response = await response.json();
			setCountArmazens(response.count);
		}
		contarArmazens();
	}, []);

	const [countCategorias, setCountCategorias] = useState(0);
	useEffect(() => {
		async function contarCategorias() {
			let response = await fetch("http://localhost:3000/categorias/count");
			response = await response.json();
			setCountCategorias(response.count);
		}
		contarCategorias();
	}, []);
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total utilizadores : {countUtilizadores}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countUtilizadores}</span>{" "}
								utilizadores
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>
				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total de Listas de Produtos : {countListasProdutos}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countListasProdutos}</span> listas
								de produtos
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>
				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total de Produtos : {countProdutos}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countListasProdutos}</span> produtos
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>

				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total de Informações de Produtos : {countInformacoes}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countInformacoes}</span> Informações
								de Produtos
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>

				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total de Armazens : {countArmazem}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countArmazem}</span> Armazens
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>

				<Carousel.Item>
					<Jumbotron fluid>
						<Container>
							<h1>Total de Categorias : {countCategorias}</h1>
							<p>
								Existem um total de{" "}
								<span class="text-primary">{countCategorias}</span> categorias
							</p>
						</Container>
					</Jumbotron>
				</Carousel.Item>
			</Carousel>
			<CardDeck>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">Utilizadores</span>
						</Card.Title>
						<Card.Text>Existem {countUtilizadores} utilizadores</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title that wraps to a new line</Card.Title>
						<Card.Text>
							This is a longer card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title that wraps to a new line</Card.Title>
						<Card.Text>
							This is a longer card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</>
	);
};
