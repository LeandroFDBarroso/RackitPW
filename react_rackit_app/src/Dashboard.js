import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Card,
	Container,
	Jumbotron,
	CardDeck,
	Button,
	Carousel,
} from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
	state = {
		dataBar: {
			labels: ["Coca Cola", "Leite", "Fanta", "Pizza", "Oreos", "YoPro"],
			datasets: [
				{
					label: "Nº Produtos",
					data: [5, 2, 3, 2, 3, 4],
					backgroundColor: [
						"rgba(255, 134,159,0.4)",
						"rgba(98,  182, 239,0.4)",
						"rgba(255, 218, 128,0.4)",
						"rgba(113, 205, 205,0.4)",
						"rgba(170, 128, 252,0.4)",
						"rgba(255, 177, 101,0.4)",
					],
					borderWidth: 2,
					borderColor: [
						"rgba(255, 134, 159, 1)",
						"rgba(98,  182, 239, 1)",
						"rgba(255, 218, 128, 1)",
						"rgba(113, 205, 205, 1)",
						"rgba(170, 128, 252, 1)",
						"rgba(255, 177, 101, 1)",
					],
				},
			],
		},
		barChartOptions: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				xAxes: [
					{
						barPercentage: 1,
						gridLines: {
							display: true,
							color: "rgba(0, 0, 0, 0.1)",
						},
					},
				],
				yAxes: [
					{
						gridLines: {
							display: true,
							color: "rgba(0, 0, 0, 0.1)",
						},
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	};

	render() {
		return (
			<MDBContainer>
				<h5 className="mt-5">Grafico de Produtos</h5>
				<Bar data={this.state.dataBar} options={this.state.barChartOptions} />
				<label class="text-muted">(Números Ficticios)</label>
			</MDBContainer>
		);
	}
}

export default ChartsPage;

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
							<h3 class="text-primary">
								<Icon className="fa fa-user" /> Total utilizadores :{" "}
								{countUtilizadores}
							</h3>
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
							<h3 class="text-primary">
								<Icon className="fa fa-list" /> Total de Listas de Produtos :{" "}
								{countListasProdutos}
							</h3>
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
							<h3 class="text-primary">
								<Icon className="fa fa-box" /> Total de Produtos :{" "}
								{countProdutos}
							</h3>
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
							<h3 class="text-primary">
								<Icon className="fa fa-info-circle" /> Total de Informações de
								Produtos : {countInformacoes}
							</h3>
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
							<h3 class="text-primary">
								<Icon className="fa fa-database  " /> Total de Armazens :{" "}
								{countArmazem}
							</h3>
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
							<h3 class="text-primary">
								<Icon className="fa fa-star" />
								Total de Categorias : {countCategorias}
							</h3>
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
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-user" /> {countUtilizadores}
							</span>{" "}
							| Utilizadores
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countUtilizadores} utilizadores ativos de momento!
							</h6>
						</Card.Text>
						<Button href="#utilizadores" variant="primary">
							Visualizar utilizadores
						</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-list" /> {countListasProdutos}
							</span>{" "}
							| Listas de Produtos
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countListasProdutos} listas de utilizadores ativas de
								momento!
							</h6>
						</Card.Text>
						<Button href="#lista-produtos" variant="primary">
							Visualizar Listas de Produtos
						</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-box" /> {countProdutos}
							</span>{" "}
							| Produtos
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countProdutos} produtos inseridos.
							</h6>
						</Card.Text>
						<Button href="#produtos" variant="primary">
							Visualizar Produtos
						</Button>
					</Card.Body>
				</Card>
			</CardDeck>
			<br></br>
			<CardDeck>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-info-circle" /> {countInformacoes}
							</span>{" "}
							| Informações de Produtos
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countInformacoes} informações de produtos!
							</h6>
						</Card.Text>
						<Button href="#info-produtos" variant="primary">
							Visualizar informações de produtos
						</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-star" /> {countCategorias}
							</span>{" "}
							| Categorias
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countCategorias} categorias de momento!
							</h6>
						</Card.Text>
						<Button href="#categorias" variant="primary">
							Visualizar Categorias
						</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "12rem" }}>
					{/* <Card.Img variant="bottom" src="img/users.png" /> */}
					<Card.Body>
						<Card.Title>
							<span class="text-primary">
								{" "}
								<Icon className="fa fa-database  " /> {countArmazem}
							</span>{" "}
							| Armazens
						</Card.Title>
						<Card.Text>
							<h6 class="text-muted">
								Existem {countArmazem} armazens inseridos.
							</h6>
						</Card.Text>
						<Button href="#armazems" variant="primary">
							Visualizar armazens
						</Button>
					</Card.Body>
				</Card>
			</CardDeck>
			<div class="row">
				<ChartsPage />
			</div>
		</>
	);
};
