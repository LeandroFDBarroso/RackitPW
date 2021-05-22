import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Produtos, ProdutosRelations, Categorias, ProdutosCategorias, InfoProduto} from '../models';
import {ProdutosCategoriasRepository} from './produtos-categorias.repository';
import {CategoriasRepository} from './categorias.repository';
import {InfoProdutoRepository} from './info-produto.repository';

export class ProdutosRepository extends DefaultCrudRepository<
  Produtos,
  typeof Produtos.prototype.id,
  ProdutosRelations
> {

  public readonly categorias: HasManyThroughRepositoryFactory<Categorias, typeof Categorias.prototype.id,
          ProdutosCategorias,
          typeof Produtos.prototype.id
        >;

  public readonly infoProdutos: HasManyRepositoryFactory<InfoProduto, typeof Produtos.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProdutosCategoriasRepository') protected produtosCategoriasRepositoryGetter: Getter<ProdutosCategoriasRepository>, @repository.getter('CategoriasRepository') protected categoriasRepositoryGetter: Getter<CategoriasRepository>, @repository.getter('InfoProdutoRepository') protected infoProdutoRepositoryGetter: Getter<InfoProdutoRepository>,
  ) {
    super(Produtos, dataSource);
    this.infoProdutos = this.createHasManyRepositoryFactoryFor('infoProdutos', infoProdutoRepositoryGetter,);
    this.registerInclusionResolver('infoProdutos', this.infoProdutos.inclusionResolver);
    this.categorias = this.createHasManyThroughRepositoryFactoryFor('categorias', categoriasRepositoryGetter, produtosCategoriasRepositoryGetter,);
    this.registerInclusionResolver('categorias', this.categorias.inclusionResolver);
  }
}
