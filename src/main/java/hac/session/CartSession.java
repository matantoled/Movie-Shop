package hac.session;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;
import hac.model.CartItem;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Objects;

@Component
@SessionScope
public class CartSession implements Serializable {

    private ArrayList<CartItem> cartItems;

    public CartSession() {
        this.cartItems = new ArrayList<>();
    }

    public int getSize() {
        return cartItems.size();
    }

    public ArrayList<CartItem> getCartItems() {
        return cartItems;
    }

    public void addToCart(CartItem item) {
        cartItems.add(item);
    }

    public boolean removeFromCart(Long id) {
        return cartItems.removeIf(item -> Objects.equals(item.getId(), id));
    }

    public void emptyCart() {
        this.cartItems.clear();
    }

    public boolean isExist(CartItem item) {
        return cartItems.stream().anyMatch(i -> Objects.equals(i.getId(), item.getId()));
    }
}