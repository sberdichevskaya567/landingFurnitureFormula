const ProductCard = () => {
    return (
        <div className="flex gap-4">
            <div>картинка товара</div>
            <div>
                <div>название товара</div>
                <div className="flex justify-between">
                    <div className="flex">
                        <div>-</div>
                        <div>2</div>
                        <div>+</div>
                    </div>
                    <div>корзина</div>
                </div>
            </div>
        </div>
    )
}

export {ProductCard}