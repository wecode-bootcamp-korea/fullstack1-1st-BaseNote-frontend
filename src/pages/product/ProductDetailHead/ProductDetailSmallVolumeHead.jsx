import React, { Component } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { formatMoney, onClickAlert } from '../../../utils';
import { PURCHASE_MESSAGES } from '../../../config';
import './ProductDetailSmallVolumeHead.scss';

class ProductDetailSmallVolumeHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
    };
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantity = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  render() {
    const { quantity, show } = this.state;
    const { name, image_url, price, series_number, series } =
      this.props.productData;

    return (
      <div className="ProductDetailSmallVolumeHead">
        <div className="producttDetailLeftSection">
          <img
            src={image_url}
            alt="제품이미지"
            className="productDetailImage"
          />
        </div>
        <section className="productDetailRightSection">
          <div className="productDetailTitle">
            {series} {series_number}. {name}
          </div>
          <div className="productDetailPrice">{formatMoney(price)}원</div>
          <div className="option_40ml_HiddenBox">
            <p className="only_40ml_HiddenTitle">
              {series} {series_number}. {name}
            </p>
            <div className="hiddenCountBox">
              <button
                type="button"
                className="only_40ml_MinusButton"
                onClick={this.decreaseQuantity}
              >
                -
              </button>
              <div className="hiddenQuantity">
                {show ? <h2>{quantity}</h2> : ''}
              </div>
              <button
                type="button"
                className="only_40ml_PlusButton"
                onClick={this.increaseQuantity}
              >
                +
              </button>
            </div>
            <span className="productDetailOptionPrice">
              {formatMoney(price * quantity)}원
            </span>
          </div>
          <div className="productTotalPrice">
            <p className="totalPriceTitle">총 상품금액</p>
            <p className="totalPrice">{formatMoney(price * quantity)}원</p>
          </div>
          <div className="productDetailButtons">
            <button
              className="productPurchaseButton buttonCommon"
              onClick={() => onClickAlert(PURCHASE_MESSAGES.addCart)}
            >
              단품 장바구니
            </button>
            <div className="cardButton_Heart">
              <button
                className="productCartButton buttonCommon"
                onClick={() => onClickAlert(PURCHASE_MESSAGES.addDailyKit)}
              >
                데일리키트 담기
              </button>
              <FaRegHeart className="productHeartIcon" />
            </div>
          </div>
          <p className="productUserLetter">
            회원 가입 시 할인, 포인트 적립 등 다양한 혜택을 받을 수 있습니다.
          </p>
        </section>
      </div>
    );
  }
}

export default ProductDetailSmallVolumeHead;
