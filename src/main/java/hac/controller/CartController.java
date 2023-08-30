package hac.controller;
import hac.model.CartItem;
import hac.session.CartSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;


@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private final CartSession cartSession;

    @Autowired
    public CartController(CartSession cartSession) {
        this.cartSession = cartSession;
    }

    @PostMapping("/")
    public ResponseEntity<String> addToCart(@RequestBody CartItem item) {
        if (!this.cartSession.isExist(item)) {
            this.cartSession.addToCart(item);
        }
        return ResponseEntity.created(null).body(Integer.toString(this.cartSession.getSize()));
    }

    @GetMapping("/")
    public ResponseEntity<ArrayList<CartItem>> getAllItems() {
        return ResponseEntity.ok(this.cartSession.getCartItems());
    }

    @GetMapping("/cartSize/")
    public ResponseEntity<Integer> getCartSize() {
        return ResponseEntity.ok(this.cartSession.getSize());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long id) {
        if (!this.cartSession.removeFromCart(id)) {
            return ResponseEntity.ok().body("Item not found in cart");
        }
        return ResponseEntity.ok().body("Item removed from cart");
    }

    @DeleteMapping("/")
    public ResponseEntity<String> emptyCart() {
        this.cartSession.emptyCart();
        return ResponseEntity.ok().body("Cart emptied");
    }
}