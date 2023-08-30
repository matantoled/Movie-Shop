package hac.model;

import java.io.Serializable;

public class CartItem implements Serializable {

    private Long id;
    private String image;
    private String title;
    private String releaseDate;
    private Double price;

    public CartItem() {

    }

    public CartItem(Long id, String image ,String title, String releaseDate, Double price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.releaseDate = releaseDate;
        this.price = price;
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }


}
