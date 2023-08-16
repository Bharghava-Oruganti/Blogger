from django.db import models
# from django.db.models.query import QuerySet

# Create your models here.
class Blog(models.Model):

    # class PostBlog(models.Manager):
    #     def get_queryset(self) -> QuerySet:
    #         return super().get_queryset()
        # return super().get_queryset()
    published_at = models.DateTimeField('published')
    blog_content = models.TextField(max_length=1000)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    no_of_comments = models.IntegerField(default=0)
    # objects = models.Manager()
    # postobjects = PostBlog()
    def __str__(self):
        return self.blog_content
